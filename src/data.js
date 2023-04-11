// import room1 from '../images/details-1.jpeg';
// import room2 from '../images/details-2.jpeg';
// import room3 from '../images/details-3.jpeg';
// import room4 from '../images/details-4.jpeg';
// import img1 from '../images/room-1.jpeg';
// import img2 from '../images/room-2.jpeg';
// import img3 from '../images/room-3.jpeg';
// import img4 from '../images/room-4.jpeg';
// import img5 from '../images/room-5.jpeg';
// import img6 from '../images/room-6.jpeg';
// import img7 from '../images/room-7.jpeg';
// import img8 from '../images/room-8.jpeg';
// import img9 from '../images/room-9.jpeg';
// import img10 from '../images/room-10.jpeg';
// import img11 from '../images/room-11.jpeg';
// import img12 from '../images/room-12.jpeg';

const bringData = () => {
	const url = "http://localhost:8080/view-rooms";
	// const response = await fetch(url);
	// const parsedJson = await response.json();
	// data1.push(parsedJson);
	// console.log(parsedJson);

	fetch(url)
		.then((response) => response.json())
		.then((parsedJson) => (data = parsedJson))
		.catch((error) => console.error(error));
};

// bringData();
// console.log("data = ", data);

const data = [
	{
		featured: true,
		background: "room-8.jpeg",
		type: "Family Deluxe",
		price: 599,
		img_url: "/Shore-Resort/images/room-8.jpeg",
		size: "80 mp",
		max_capacity: "4 persons",
		pets_allowed: true,
		free_breakfast: false,
		desc: "Great for big families!",
		room_url: "/Shore-Resort/view-rooms/room1",
		details: ["details-2.jpeg", "details-3.jpeg", "details-4.jpeg"],
		extras: [
			"Plush pillows and breathable bed linens",
			"Soft, oversized bath towels",
			"Full-sized, pH-balanced toiletries",
			"Complimentary refreshments",
			"Internet",
			"Comfortable beds",
		],
	},
	{
		featured: true,
		background: "room-2.jpeg",
		type: "Single Room",
		price: 299,
		img_url: "/Shore-Resort/images/room-2.jpeg",
		size: "60 mp",
		max_capacity: "1 person",
		pets_allowed: true,
		free_breakfast: true,
		desc: "Great for getaways!",
		room_url: "/Shore-Resort/view-rooms/room2",
		details: ["room-10.jpeg", "room-12.jpeg", "room-11.jpeg"],
		extras: [
			"Plush pillows and breathable bed linens",
			"Soft, oversized bath towels",
			"Full-sized, pH-balanced toiletries",
			"Complimentary refreshments",
			"Internet",
			"Comfortable beds",
		],
	},
	{
		featured: true,
		background: "room-5.jpeg",
		type: "Double Room",
		price: 399,
		img_url: "/Shore-Resort/images/room-5.jpeg",
		size: "70 mp",
		max_capacity: "2 persons",
		pets_allowed: true,
		free_breakfast: false,
		desc: "Great for friends!",
		room_url: "/Shore-Resort/view-rooms/room3",
		details: ["room-9.jpeg", "room-5.jpeg", "room-7.jpeg"],
		extras: [
			"Plush pillows and breathable bed linens",
			"Soft, oversized bath towels",
			"Full-sized, pH-balanced toiletries",
			"Complimentary refreshments",
			"Internet",
			"Comfortable beds",
		],
	},
	{
		background: "room-11.jpeg",
		type: "Single Room",
		price: 299,
		img_url: "/Shore-Resort/images/room-11.jpeg",
		size: "60 mp",
		max_capacity: "1 person",
		pets_allowed: false,
		free_breakfast: false,
		desc: "Great for getaways!",
		room_url: "/Shore-Resort/view-rooms/room4",
		details: ["room-6.jpeg", "room-8.jpeg", "room-4.jpeg"],
		extras: [
			"Plush pillows and breathable bed linens",
			"Soft, oversized bath towels",
			"Full-sized, pH-balanced toiletries",
			"Complimentary refreshments",
			"Internet",
			"Comfortable beds",
		],
	},
	{
		background: "details-1.jpeg",
		type: "Family Deluxe",
		price: 499,
		img_url: "/Shore-Resort/images/details-1.jpeg",
		size: "80 mp",
		max_capacity: "4 persons",
		pets_allowed: false,
		free_breakfast: true,
		desc: "Great for big families!",
		room_url: "/Shore-Resort/view-rooms/room5",
		details: ["details-2.jpeg", "details-3.jpeg", "details-4.jpeg"],
		extras: [
			"Plush pillows and breathable bed linens",
			"Soft, oversized bath towels",
			"Full-sized, pH-balanced toiletries",
			"Complimentary refreshments",
			"Internet",
			"Comfortable beds",
		],
	},
	{
		background: "room-6.jpeg",
		type: "Double Room",
		price: 399,
		img_url: "/Shore-Resort/images/room-6.jpeg",
		size: "70 mp",
		max_capacity: "2 persons",
		pets_allowed: false,
		free_breakfast: true,
		desc: "Great for friends!",
		room_url: "/Shore-Resort/view-rooms/room6",
		details: ["room-9.jpeg", "room-5.jpeg", "room-7.jpeg"],
		extras: [
			"Plush pillows and breathable bed linens",
			"Soft, oversized bath towels",
			"Full-sized, pH-balanced toiletries",
			"Complimentary refreshments",
			"Internet",
			"Comfortable beds",
		],
	},
	{
		background: "room-7.jpeg",
		type: "Family Deluxe",
		price: 499,
		img_url: "/Shore-Resort/images/room-7.jpeg",
		size: "80 mp",
		max_capacity: "4 persons",
		pets_allowed: true,
		free_breakfast: true,
		desc: "Great for big families!",
		room_url: "/Shore-Resort/view-rooms/room7",
		details: ["details-2.jpeg", "details-3.jpeg", "details-4.jpeg"],
		extras: [
			"Plush pillows and breathable bed linens",
			"Soft, oversized bath towels",
			"Full-sized, pH-balanced toiletries",
			"Complimentary refreshments",
			"Internet",
			"Comfortable beds",
		],
	},
];

export default data;