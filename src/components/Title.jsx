import React from "react";
import Typewriter from "typewriter-effect";

function Title() {
  return (
    <div>
      {/* Daha güzel bir font bulup başlığı hallederiz... */}
      <h1 class="text-info  animate__animated animate__flipInX">
        <strong>Ensar Şener 👋</strong>
      </h1>
      <h2>
        <Typewriter
          options={{
            strings: [
              "Backend Developer",
              "Frontend Developer",
              "Mobile Developer",
            ],
            autoStart: true,
            loop: true,
            delay: 40,
          }}
        />
      </h2>
    </div>
  );
}

export default Title;
