"use client";
import { useState } from "react";

const DynamicForm = () => {
  const [fields, setFields] = useState([]);
  const [title, setTitle] = useState("Question");

  const handleAddField = () => {
    setFields([...fields, { type: "", value: "" }]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleChangeFieldType = (index, type) => {
    const updatedFields = [...fields];
    updatedFields[index].type = type;
    setFields(updatedFields);
  };

  const handleChangeFieldValue = (index, value) => {
    const updatedFields = [...fields];
    updatedFields[index].value = value;
    setFields(updatedFields);
  };
  
  const  handleChangeTitle = (index, value) => {
    // const updatedTitle = [...title];
    // updatedTitle[index] = value;
    setTitle(title);
  };

  return (
    <form>
      {fields.map((field, index) => (
        <div key={index} className="my-4">
          <div>
            <input
              type="text"
              value={title +" "+ index}
              onClick={(e) => handleChangeTitle(index, e.target.value)}
              className="bg-transparent outline-none"
            />
          </div>
          <input
            type={field.type}
            value={field.value}
            onChange={(e) => handleChangeFieldValue(index, e.target.value)}
            className="px-4 py-2 border-2 border-blue-600 rounded-sm"
            required
          />
          <select
            value={field.type}
            onChange={(e) => handleChangeFieldType(index, e.target.value)}
            className="px-4 py-2 border-2 border-blue-600 rounded-sm mx-2"
          >
            <option value="">Select a type</option>
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
            <option value="radio">Radio</option>
            {/* Add more options for different field types */}
          </select>
          <button
            type="button"
            onClick={() => handleRemoveField(index)}
            className="px-4 py-2 bg-red-500 text-white rounded-sm"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddField}
        className="px-4 py-2 bg-blue-900 text-white my-2 rounded-sm"
      >
        Add Field
      </button>
      {fields.length > 0 ?(
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white my-2 mx-4 rounded-sm"
      >
        Submit
      </button>

      ):""}
    </form>
  );
};

export default DynamicForm;
