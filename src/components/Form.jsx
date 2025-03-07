import { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState({ searchTerm: "" });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.moviesearch(formData.searchTerm);
  };
  // The component must return some JSX
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="searchTerm"
          value={formData.searchTerm}
          onChange={handleChange}
          placeholder="Enter movie title..."
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Form;
