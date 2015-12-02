window.onload = init;
var currentLink;
function init() {
    var button = document.getElementById("submitTravel");
    button.onclick = createComment;

    var commentArray = getCommentArray();

    for (var i = 0; i < commentArray.length; i++) {
        var key = commentArray[i];
        var value = JSON.parse(localStorage[key]);
        addCommentToDOM(key, value);
    }
}
function getCommentArray() {
    var commentArray = localStorage.getItem("commentArray");
    if (!commentArray) {
        commentArray = [];
        localStorage.setItem("commentArray", JSON.stringify(commentArray));
    } else {
        commentArray = JSON.parse(commentArray);
    }
    return commentArray;
}

function createComment() {
    var commentArray = getCommentArray();
    var user_Name = document.getElementById("user_name").value;
    var lat = document.getElementById("user_lat").value;
    var long = document.getElementById("user_long").value;
    var comment = document.getElementById("commentbox").value;
    var ratingSelectObj = document.getElementById("select_rating");
    var index = ratingSelectObj.selectedIndex;
    var rating = ratingSelectObj[index].value;

    // create sticky note using JSON to hold value and color
    var currentDate = new Date();
    var key = "comment_" + currentDate.getTime();
    var commentObj = {
        "user_Name": user_Name,
        "lat": lat,
        "long": long,
        "comment": comment,
        "rating": rating

    };
    localStorage.setItem(key, JSON.stringify(commentObj));

    // add new sticky note key to array and update notes array in localStorage
    commentArray.unshift(key);
    localStorage.setItem("commentArray", JSON.stringify(commentArray));
    addCommentToDOM(key, commentObj);
}

function addCommentToDOM(key, value) {
    var comments = document.getElementById("comments");
	var linebreak = document.createElement("br");
    var commentlielement = document.createElement("li");
	var createdImage = document.createElement("img");
	
    // set the id attribute to the key so we can find it using
    // the ids stored in the stickies array
    commentlielement.setAttribute("id", key);
    // use the stickyObj color, and set the background-color CSS style

	// create one span above the map, one below
    var spanPre = document.createElement("span");
	var spanPost = document.createElement("span");
    spanPre.setAttribute("class", "commentspan");
	spanPost.setAttribute("class", "commentspan");

		// pull star rating from comment rating
	var rating = value.rating;
	var rateLink = "http://www.cs.mun.ca/~g25gal/imgs/1_stars.png";
	if (value.rating == "one_star")
			rateLink = "http://www.cs.mun.ca/~g25gal/imgs/1_stars.png";
	if (value.rating == "two_star")
			rateLink = "http://www.cs.mun.ca/~g25gal/imgs/2_stars.png";
	if (value.rating == "three_star")
			rateLink = "http://www.cs.mun.ca/~g25gal/imgs/3_stars.png";
	if (value.rating =="four_star")
			rateLink = "http://www.cs.mun.ca/~g25gal/imgs/4_stars.png";
	if (value.rating == "five_star")
			rateLink = "http://www.cs.mun.ca/~g25gal/imgs/5_stars.png";
	
    // use the stickyObj value as the text for the sticky note
    spanPre.innerHTML = "<strong>" + value.user_Name + "</strong>";
	createdImage.setAttribute("src", rateLink);
	spanPre.appendChild(createdImage);
	spanPost.innerHTML = value.comment;
	
	// create map div
	var mapDiv = document.createElement("div");
	mapDiv.style.width = "250px";
	mapDiv.style.height = "200px";

	// create map, adding to mapDiv
	var mapProperties = {
		// currently assumes decimal lat/long format
		center:new google.maps.LatLng(value.lat, value.long),
		zoom:6
	};
	var map = new google.maps.Map(mapDiv, mapProperties);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(value.lat, value.long),
		map: map,
		title:'Location'
	});

	
	// add spans and div to list
	commentlielement.appendChild(spanPre);
	commentlielement.appendChild(mapDiv);
    	commentlielement.appendChild(spanPost);
	commentlielement.appendChild(linebreak);
	
    // add everything to the DOM
	var list = document.getElementById("comments");
	list.insertBefore(commentlielement, list.childNodes[0]);
}
    /*

    // add an event listener so when you click on a sticky note it can be deleted
    sticky.onclick = deleteSticky;
}

function removeStickyFromDOM(key) {
    var sticky = document.getElementById(key);
    sticky.parentNode.removeChild(sticky);
}

function clearStickyNotes() {
    localStorage.clear();
    var stickyList = document.getElementById("stickies");
    var stickies = stickyList.childNodes;
    for (var i = stickies.length - 1; i >= 0; i--) {
        stickyList.removeChild(stickies[i]);
    }

    // reset stickies array
    var stickiesArray = getStickiesArray();
}
*/





//posterName
//commentText
//latitude
//longitude




