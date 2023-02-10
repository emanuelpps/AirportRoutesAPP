export function ShowMeteo() {
  return (
    <div className="d-flex flex-column mb-3">
      <div class="form-check form-check-reverse form-switch position-absolute top-100 start-50 translate-middle mt-1">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault">
          Show Meteorological information
        </label>
      </div>
    </div>
  );
}

export default ShowMeteo;
