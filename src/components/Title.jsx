import React from "react";
import Typewriter from "typewriter-effect";

function Title() {
  return (
    <div>
      {/* Daha güzel bir font bulup başlığı hallederiz... */}
      <h1 class="text-info  animate__animated animate__flipInX">
        <strong>NapolyonNereli 👋</strong>
      </h1>
      <h2>
        <Typewriter
          options={{
            strings: ["Deneme", "Beşiktaş"],
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
