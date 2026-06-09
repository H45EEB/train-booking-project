const stationValues = {
            "Colombo": 25,
            "Mathara": 10,
            "Galle": 15,
            "Jaffna": 50,
        };

        // Function to calculate price dynamically
        function calculatePrice() {
            let from = document.getElementById("fromStation").value;
            let to = document.getElementById("toStation").value;
            let seats = Number(document.getElementById("numSeats").value);
            
            let displayArea = document.getElementById("priceDisplay");

            if (from !== "" && to !== "" && from !== to && seats > 0) {
                let fromValue = stationValues[from];
                let toValue = stationValues[to];
                
                let difference = fromValue - toValue;
                
                if (difference < 0) {
                    difference = difference * -1;
                }
                
                let pricePerSeat = difference * 100;
                let totalPrice = pricePerSeat * seats;
                
                displayArea.innerHTML = "Total Price: Rs." + totalPrice ;
                
                return totalPrice; 
            } else if (from === to && from !== "") {
                displayArea.innerHTML = "<span style='color:red;'>Departure and Destination cannot be the same!</span>";
                return 0;
            } else {
                displayArea.innerHTML = "Total Price: Rs.";
                return 0;
            }
        }

        function handleBooking(event) {
            event.preventDefault();

            try {
                let from = document.getElementById("fromStation").value;
                let to = document.getElementById("toStation").value;
                let date = document.getElementById("travelDate").value;
                let seats = Number(document.getElementById("numSeats").value); 
                let name = document.getElementById("fullName").value;
                let nic = document.getElementById("nicPassport").value;
                let mobile = document.getElementById("mobileNumber").value;

                if (from === to) {
                    throw new Error("Departure and Destination cannot be the same!");
                }
                if (seats <= 0) {
                    throw new Error("You must book at least 1 seat.");
                }
                if (mobile.length < 10) {
                    throw new Error("Please enter a valid mobile number.");
                }

                let finalPrice = calculatePrice();

                let confirmationMessage = "Please confirm your booking details:\n\n" +
                                          "Name: " + name + "\n" +
                                          "Route: " + from + " to " + to + "\n" +
                                          "Date: " + date + "\n" +
                                          "Seats: " + seats + "\n" +
                                          "Total Price: Rs." + finalPrice;
                                          
                let isConfirmed = confirm(confirmationMessage);

                if (isConfirmed) {
                    alert("Success! Your tickets have been booked.");
                    document.getElementById("bookingForm").reset();
                    calculatePrice(); 
                } else {
                    alert("Booking cancelled.");
                }

            } catch (e) {
                alert("Error: " + e.message);
            } finally {
                console.log("Booking attempt finished.");
            }
        }