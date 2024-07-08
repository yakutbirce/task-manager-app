import React, { useRef } from "react";
import { statusOption, sortOption } from "../helpers/constants";
import { useDispatch } from "react-redux";
import {
  filterBySearch,
  filterByStatus,
  filterByDate,
  sortTasks,
  clearFilters,
} from "../redux/taskSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const inputRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const statusRef = useRef();
  const sortRef = useRef();

  const handleReset = () => {
    dispatch(clearFilters());
    inputRef.current.value = "";
    startDateRef.current.value = "";
    endDateRef.current.value = "";
    statusRef.current.value = "Seçiniz";
    sortRef.current.value = "Seçiniz";
  };

  const handleDateChange = () => {
    const startDate = document.querySelector("input[name='startDate']").value;
    const endDate = document.querySelector("input[name='endDate']").value;
    dispatch(filterByDate({ startDate, endDate }));
  };

  return (
    <div className="filter-sec">
      <h2>Filtreleme Seçenekleri</h2>

      <form>
        <div>
          <label htmlFor="">Arama</label>
          <input
            ref={inputRef}
            onChange={(e) => dispatch(filterBySearch(e.target.value))}
            type="text"
            placeholder="Görev veya kategori girin"
          />
        </div>
        <div>
          <label htmlFor="">Öncelik Durumu</label>
          <select
            ref={statusRef}
            name="status"
            id=""
            onChange={(e) => dispatch(filterByStatus(e.target.value))}
          >
            <option disabled selected>
              Seçiniz
            </option>
            {statusOption.map((statu) => (
              <option>{statu}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Başlangıç Tarihi</label>
          <input
            type="date"
            name="startDate"
            ref={startDateRef}
            onChange={handleDateChange}
          />
        </div>
        <div>
          <label htmlFor="">Bitiş Tarihi</label>
          <input
            type="date"
            name="endDate"
            ref={endDateRef}
            onChange={handleDateChange}
          />
        </div>
        <div>
          <label htmlFor="">Sırala</label>
          <select
            ref={sortRef}
            name="sort"
            onChange={(e) => dispatch(sortTasks(e.target.value))}
          >
            <option disabled selected>
              Seçiniz
            </option>
            {sortOption.map((sort) => (
              <option>{sort}</option>
            ))}
          </select>
        </div>

        <div>
          <button type="button" onClick={handleReset}>
            Filtreleri Temizle
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
