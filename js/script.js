// station codes + names
const stations_list = ['CMB', 'KDY', 'JAF', 'GAL', 'TRI'];
const stations_name = ['Colombo', 'Kandy', 'Jaffna', 'Galle', 'Trincomalee'];

const code_to_name = {
    'CMB': 'Colombo',
    'KDY': 'Kandy',
    'JAF': 'Jaffna',
    'GAL': 'Galle',
    'TRI': 'Trincomalee'
};

const name_to_code = {
    'Colombo': 'CMB',
    'Kandy': 'KDY',
    'Jaffna': 'JAF',
    'Galle': 'GAL',
    'Trincomalee': 'TRI'
};

// price values per station (used for ticket cost calculation)
const station_values = {
    "Colombo": 20,
    "Kandy": 40,
    "Galle": 10,
    "Jaffna": 80,
    "Trincomalee": 60,
};

// get url params if coming from schedule page
const url_params = new URLSearchParams(window.location.search);
let route_from = url_params.get('from') || undefined;
let route_to = url_params.get('to') || undefined;
let initial_date = url_params.get('date') || undefined;
let initial_time = url_params.get('time') || undefined;

let full_trip_collection = [];

// ---------------------------------------------------
// booking form - populate station dropdowns
// ---------------------------------------------------
function makeStationDrops() {
    if (!$('#bookingForm').length) return;

    const $start_select = $('#start');
    const $end_select = $('#end');

    $start_select.html('<option value="">Select Departure Station</option>');
    $end_select.html('<option value="">Select Destination Station</option>');

    stations_name.forEach(function(name) {
        // Replaced new Option() with template literals
        $start_select.append(`<option value="${name}">${name}</option>`);
        $end_select.append(`<option value="${name}">${name}</option>`);
    });
}

function updateFormDates() {
    const start_name = $('#start').val();
    const end_name = $('#end').val();
    const $date_select = $('#date');
    const $time_select = $('#time');

    // reset both dropdowns on route change
    $date_select.html('<option value="">Select Route First</option>').prop('disabled', true);
    $time_select.html('<option value="">Select Date First</option>').prop('disabled', true);

    if (!start_name || !end_name || start_name === end_name) return;

    const start_code = name_to_code[start_name];
    const end_code = name_to_code[end_name];

    let matched_dates = [];

    full_trip_collection.forEach(function(trip) {
        if (trip.origin === start_code && trip.destination === end_code) {
            if (!matched_dates.includes(trip.actual_date)) {
                matched_dates.push(trip.actual_date);
            }
        }
    });

    if (matched_dates.length > 0) {
        $date_select.html('<option value="">Select Available Date</option>').prop('disabled', false);
        matched_dates.forEach(function(date) {
            $date_select.append(`<option value="${date}">${date}</option>`);
        });

        // pre-select date if coming from schedule page
        if (initial_date) {
            let date_found = false;
            $date_select.find('option').each(function() {
                if ($(this).val().toLowerCase().includes(initial_date.toLowerCase()) || initial_date.toLowerCase().includes($(this).val().toLowerCase())) {
                    $date_select.val($(this).val());
                    date_found = true;
                }
            });
            initial_date = undefined;
            if (date_found) updateFormTimes();
        }
    } else {
        $date_select.html('<option value="">No trains on this route</option>');
    }
}

function updateFormTimes() {
    const start_name = $('#start').val();
    const end_name = $('#end').val();
    const chosen_date = $('#date').val();
    const $time_select = $('#time');

    $time_select.html('<option value="">Select Date First</option>').prop('disabled', true);

    if (!start_name || !end_name || !chosen_date) return;

    const start_code = name_to_code[start_name];
    const end_code = name_to_code[end_name];

    let available_times = [];

    full_trip_collection.forEach(function(trip) {
        if (trip.origin === start_code && trip.destination === end_code && trip.actual_date === chosen_date) {
            if (!available_times.includes(trip.departure)) {
                available_times.push(trip.departure);
            }
        }
    });

    if (available_times.length > 0) {
        $time_select.html('<option value="">Select Available Time</option>').prop('disabled', false);

        let sorted_times = available_times.sort(function(a, b) {
            return new Date('1970/01/01 ' + a) - new Date('1970/01/01 ' + b);
        });

        sorted_times.forEach(function(time) {
            $time_select.append(`<option value="${time}">${time}</option>`);
        });

        // pre-select time if passed from schedule
        if (initial_time) {
            $time_select.val(initial_time);
            initial_time = undefined;
        }
    } else {
        $time_select.html('<option value="">No times available</option>');
    }
}

// ---------------------------------------------------
// price calculator
// ---------------------------------------------------
function findTicketPrice() {
    let start_val = document.getElementById("start").value;
    let end_val = document.getElementById("end").value;
    let seat_count = Number(document.getElementById("seats").value);

    let display_price = document.getElementById("priceDisplay");
    if (!display_price) return;

    if (start_val !== "" && end_val !== "" && start_val !== end_val && seat_count > 0) {
        let station_start = station_values[start_val];
        let station_end = station_values[end_val];
        let station_diff = Math.abs(station_start - station_end);
        let total_cost = station_diff * 50 * seat_count;
        display_price.innerHTML = "Total Price: Rs." + total_cost;

    } else if (start_val === end_val && start_val !== "") {
        display_price.innerHTML = "<span style='color:red;'>Departure and Destination cannot be the same!</span>";
    } else {
        display_price.innerHTML = "Total Price: Rs.0";
    }
}

function startTicketBooking(event) {
    event.preventDefault();

    try {
        let start_station = document.getElementById("start").value;
        let end_station   = document.getElementById("end").value;
        let journey_date  = document.getElementById("date").value;
        let journey_time  = document.getElementById("time").value;
        let total_seats   = Number(document.getElementById("seats").value);
        let pass_name     = document.getElementById("pname").value.trim();
        let pass_nic      = document.getElementById("nic").value.trim();
        let pass_mobile   = document.getElementById("cnumber").value.trim();

        if (!start_station || !end_station) throw new Error("Please select both departure and destination stations.");
        if (start_station === end_station) throw new Error("Departure and Destination cannot be the same!");
        if (!journey_date) throw new Error("Please select a journey date.");
        if (!journey_time) throw new Error("Please select a departure time.");
        if (!total_seats || total_seats <= 0) throw new Error("You must book at least 1 seat.");
        if (!pass_name) throw new Error("Please enter the passenger name.");
        if (!pass_nic) throw new Error("NIC or Passport number is required.");
        if (!pass_mobile) throw new Error("Mobile number is required.");
        if (pass_mobile.length < 10) throw new Error("Please enter a valid mobile number (min 10 digits).");

        if (confirm("Confirm your booking?")) {
            alert("Booking confirmed! Your tickets have been booked.");
            document.getElementById("bookingForm").reset();
            updateFormDates();
            findTicketPrice();
        } else {
            alert("Booking cancelled.");
        }
    } catch (booking_error) {
        alert("Error: " + booking_error.message);
    }
}

window.pricecal = findTicketPrice;
window.booking = startTicketBooking;

// ---------------------------------------------------
// journey card popup (journey.html)
// ---------------------------------------------------
function showCardPopup(from_index, to_index) {
    route_from = stations_list[from_index];
    route_to = stations_list[to_index];

    let lookup_key = route_from + "_" + route_to;
    if (typeof sriLankaTrainTrips === 'undefined' || !sriLankaTrainTrips[lookup_key]) return;

    let targeted_trip = sriLankaTrainTrips[lookup_key];

    $('#route-origin').text(stations_name[from_index]);
    $('#route-destination').text(stations_name[to_index]);
    $('#route-direction').text(targeted_trip.direction);
    $('#route-vibe').text(`"${targeted_trip.vibe}"`);
    $('#route-description').text(targeted_trip.description);
    $('#route-highlights').text(targeted_trip.keyHighlights);

    $('#from-station-image').attr('src', `images/${route_from}.jpg`);
    $('#to-station-image').attr('src', `images/${route_to}.jpg`);

    $('#black-screen').removeClass('hidden');
    $('#journey-card').removeClass('hidden');
    $('body').addClass('hide-exec');
}

$('.card').click(function () {
    showCardPopup($(this).data('from'), $(this).data('to'));
});

$('#btn-select-route').click(function () {
    window.open(route_from && route_to ? `schedule.html?from=${route_from}&to=${route_to}` : 'schedule.html', '_self');
});

$('#black-screen').click(function () {
    $('#black-screen').addClass('hidden');
    $('#journey-card').addClass('hidden');
    $('body').removeClass('hide-exec');
});

// ---------------------------------------------------
// schedule table
// ---------------------------------------------------
function findActualDate(day_name) {
    const total_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const target_day = total_days.indexOf(day_name);
    if (target_day === -1) return day_name;

    const date_today = new Date();
    let day_delta = target_day - date_today.getDay();
    if (day_delta < 0) day_delta += 7;

    const date_result = new Date(date_today);
    date_result.setDate(date_today.getDate() + day_delta);

    return date_result.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

function makeTrainSchedule() {
    full_trip_collection = [];
    if (typeof trainSchedule === 'undefined') return;

    Object.keys(trainSchedule).forEach(function(day) {
        const generated_date = findActualDate(day);
        trainSchedule[day].forEach(function(trip) {
            full_trip_collection.push({
                origin: trip.origin,
                destination: trip.destination,
                departure: trip.departure,
                actual_date: generated_date
            });
        });
    });
}

function makeFilterOptions() {
    if (full_trip_collection.length === 0 || !$('#origin-select').length) return;

    let unique_origins = [], unique_dests = [], seen_origins = {}, seen_dests = {};

    for (let index_i = 0; index_i < full_trip_collection.length; index_i++) {
        let single_trip = full_trip_collection[index_i];
        if (!seen_origins[single_trip.origin]) { seen_origins[single_trip.origin] = true; unique_origins.push(single_trip.origin); }
        if (!seen_dests[single_trip.destination]) { seen_dests[single_trip.destination] = true; unique_dests.push(single_trip.destination); }
    }

    unique_origins.sort(); unique_dests.sort();

    const $origin_filter = $('#origin-select'), $dest_filter = $('#dest-select');
    unique_origins.forEach(function(origin_item) {
        $origin_filter.append(`<option value="${origin_item}">${origin_item}</option>`);
    });
    unique_dests.forEach(function(dest_item) {
        $dest_filter.append(`<option value="${dest_item}">${dest_item}</option>`);
    });

    if (route_from) $origin_filter.val(route_from);
    if (route_to) $dest_filter.val(route_to);
}

function showScheduleTable() {
    if (!$('#schedule-table').length) return;

    const $table_body = $('#schedule-table tbody');
    let selected_origin = $('#origin-select').val() || route_from;
    let selected_dest = $('#dest-select').val() || route_to;

    $table_body.empty();
    let filter_results = [];

    for (let index_j = 0; index_j < full_trip_collection.length; index_j++) {
        let current_item = full_trip_collection[index_j];
        let origin_ok = (selected_origin === 'ALL' || selected_origin === null || current_item.origin === selected_origin);
        let dest_ok = (selected_dest === 'ALL' || selected_dest === null || current_item.destination === selected_dest);
        if (origin_ok && dest_ok) filter_results.push(current_item);
    }

    if (filter_results.length === 0) {
        $table_body.append('<tr><td colspan="5" class="no-records">No trains found for this route.</td></tr>');
        return;
    }

    for (let index_k = 0; index_k < filter_results.length; index_k++) {
        let final_row = filter_results[index_k];
        $table_body.append(`
            <tr>
                <td class="station-badge">${final_row.origin}</td>
                <td class="station-badge">${final_row.destination}</td>
                <td>${final_row.actual_date}</td>
                <td class="time-highlight">${final_row.departure}</td>
                <td>
                    <button class="btn-primary btn-sm book-now-btn"
                            data-origin="${final_row.origin}" data-dest="${final_row.destination}"
                            data-date="${final_row.actual_date}" data-time="${final_row.departure}">
                        Book Now
                    </button>
                </td>
            </tr>
        `);
    }
}

$('#origin-select, #dest-select').on('change', function() {
    route_from = route_to = undefined;
    window.history.replaceState({}, document.title, window.location.pathname);
    showScheduleTable();
});

$('#reset-filters-btn').on('click', function() {
    route_from = route_to = undefined;
    window.history.replaceState({}, document.title, window.location.pathname);
    $('#origin-select').val('ALL');
    $('#dest-select').val('ALL');
    showScheduleTable();
});

$('#schedule-table').on('click', '.book-now-btn', function() {
    window.location.href = `booking.html?from=${$(this).data('origin')}&to=${$(this).data('dest')}&date=${encodeURIComponent($(this).data('date'))}&time=${encodeURIComponent($(this).data('time'))}`;
});

// prefill booking form if arriving from schedule
function fillBookingForm() {
    if (!$('#bookingForm').length) return;

    if (route_from) {
        const mapping_name = code_to_name[route_from.toUpperCase()];
        if (mapping_name) $('#start').val(mapping_name);
    }
    if (route_to) {
        const mapping_name = code_to_name[route_to.toUpperCase()];
        if (mapping_name) $('#end').val(mapping_name);
    }

    updateFormDates();
}

$(document).ready(function() {
    makeTrainSchedule();
    makeFilterOptions();
    showScheduleTable();
    makeStationDrops();
    fillBookingForm();
});