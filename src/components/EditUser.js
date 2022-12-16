import { useState } from "react";
import api from "../api/api";

function EditUser({ form, setForm, reload, setReload }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const clone = { ...form };
      delete clone._id;
      await api.put("/user/edit", clone);
      setShow(false);
      setReload(!reload);
    } catch (error) {
      console.log(error);
      alert("Algo deu errado");
    }
  }

  return (
    <div>
      <div variant="primary" onClick={handleShow}>
        Editar Usuário
      </div>

      <div show={show} onHide={handleClose}>
        <div closediv>
          <div>Modal heading</div>
        </div>
        <div>
          <div className="mb-3">
            <label>Nome do Usuário</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div variant="secondary" onClick={handleClose}>
            Close
          </div>
          <div variant="primary" onClick={handleSubmit}>
            Save Changes
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
