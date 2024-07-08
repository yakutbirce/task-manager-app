import { statusOption, typeOption } from "../helpers/constants";
import { v4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");

    //Form data oluşturma
    const form = new FormData(e.target);

    const newTask = Object.fromEntries(form.entries());

    console.log("New Task:", newTask);

    if (!newTask.deadline || !newTask.status) {
      console.log("Form validation failed");
      toast.info("Lütfen tüm alanları doldurun.");
      return;
    }

    //id ekleme
    newTask.id = v4();
    console.log("New Task with ID:", newTask);

    axios
      .post("http://localhost:3001/tasks", newTask)
      .then(() => {
        console.log("API request successful");
        //yeni görevi store'a kaydetme
        dispatch(addTask(newTask));
        //ekleme başarılı mesajı toastify
        toast.success("Görev başarıyla eklendi");
        console.log("Görev başarıyla eklendi");
        navigate("/");
      })
      .catch((error) => {
        console.error("API request failed", error);
        toast.error("Beklenmedik bir hata oluştu");
      });
  };

  return (
    <div className="add-sec">
      <h2>Yeni Görev Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Görev</label>
          <input type="text" required name="task" />
        </div>
        <div>
          <label htmlFor="">Kategori</label>
          <input type="text" required name="category" />
        </div>
        <div>
          <label htmlFor="">Açıklamalar</label>
          <input type="text" required name="description" />
        </div>
        <div>
          <label htmlFor="">Tür</label>
          <select name="type" required>
            <option disabled selected>
              Seçiniz
            </option>
            {typeOption.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Durum</label>
          <select name="status" required>
            <option disabled selected>
              Seçiniz
            </option>
            {statusOption.map((status, i) => (
              <option key={i}>{status}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Tarih</label>
          <input type="date" required name="deadline" />
        </div>
        <div>
          <button type="submit">Ekle</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddTask;
