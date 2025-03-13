let hotel = {
    hotelName: "Random Hotel",
    stars: 4,
    location: "Tbilisi, Georgia",
    guestReviews: {
        guest1: "Good service, highly recommend!",
        guest2: "Good location, but a bit noisy.",
        guest3: "Very clean and comfortable, would stay again."
    }
};

console.log("Hotel Properties:", Object.keys(hotel));
console.log("Hotel Values:", Object.values(hotel));

if ('spa' in hotel) {
    console.log("The hotel has a spa.");
} else {
    console.log("The hotel does not have a spa.");
}

