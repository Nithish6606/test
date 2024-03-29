import React from "react";

function MapEmbed() {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold py-5">Join us at</h1>
      <div className="text-center pb-4">
        <p>JNTUH University College of Engineering, Jagtial </p>
        <p>Kondagattu, Jagtial, 505501</p>
      </div>
      <iframe
        title="clg Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.96223685515!2d78.9083819!3d18.665690499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcd1bbaca8d3eab%3A0x4aaab06b93e62af3!2sJNTUH%20University%20College%20of%20Engineering%20Jagtial!5e0!3m2!1sen!2sin!4v1711650206690!5m2!1sen!2sin" 
        className="border-none w-[350px] h-[250px] lg:w-[500px] lg:h-[400px] rounded-xl"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default MapEmbed;
