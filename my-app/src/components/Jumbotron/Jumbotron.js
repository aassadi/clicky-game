//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = (props) => (
	<header className = "header">
		<h1> Clicky Game!</h1>
		<h2>Click on an image to earn points, but don't click on any more than once! 
		Click all 12 pics, and you win.</h2>
	</header>
);

export default Jumbotron;