import React from "react";

function Filter() {
  return (
    <div className="filter-holder">
      <section>
        <h5>Gender</h5>
        <div>
          <input type="radio" value="male" name="gender" />
          <label for="male">Male</label>
        </div>
        <div>
          <input type="radio" value="female" name="gender" />
          <label for="female">Female</label>
        </div>
      </section>
    </div>
  );
}
export default Filter;
