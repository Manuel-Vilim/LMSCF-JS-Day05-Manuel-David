function HotelConstructor (name, rooms, booked){
	this.name = name;
	this.rooms = rooms;
	this.checkAvailability = function(){
			return this.rooms - this.booked;
	};
}
var hiltonHotel = new HotelConstructor ("Hilton", 1000, 680);
var continentalHotel = new HotelConstructor ("Continental", 300, 280);
var hostelHotel = new HotelConstructor ("Hostel", 200,220);
//array

var Hotels =[{

	name: "Continental",
	rooms: 300,
	booked: 280,
	checkAvailability:function(){
		var nights =Math.ceil(Math.random()*10);
		return nights;
	},
	
	name: "Hilton",
	rooms: 1000,
	booked: 680,
	checkAvailability:function(){
		var nights =Math.ceil(Math.random()*10);
		return nights;
	},
	
	name: "Hostel",
	rooms: 200,
	booked: 220,
	checkAvailability:function(){
		var nights =Math.ceil(Math.random()*10);
		return nights;
	},


	}];
