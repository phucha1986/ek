const EKDropdown = (params) => {

  return (
    <div role="combobox" aria-owns="auto-suggest_1_list" aria-expanded="true" aria-haspopup="true">
      <button type="button" className="hidden-control nofocus" aria-hidden="true" tabindex="-1"></button>
      <span className="input-field input-field--active">
        <span className="input-field__field">
          <input aria-labelledby="auto-suggest_1_label" className="input-field__input ellipsis" aria-describedby="auto-suggest_1_aria-described-by" id="auto-suggest_1" aria-autocomplete="list" aria-controls="auto-suggest_1_list" type="text" autocomplete="off" value={params.DefaultItem}/>
        </span>
        <label for="auto-suggest_1" id="auto-suggest_1_label" aria-label={params.Title} className="input-field__placeholder">{params.Title}</label>
        <button type="button" className="input-field__button-icon nofocus" tabindex="-1" aria-hidden="true">
          <span dir="auto" className="close-icon--small pictogram-wrapper" aria-hidden="true">
            <i className="icon icon-close"></i>
          </span>
        </button>
      </span>
      <span className="hidden-control" id="auto-suggest_1_aria-described-by">{params.Title}</span>
      <p role="region" aria-live="polite" className="auto-suggest__error-msg"></p>
    </div>
  );
}

export default EKDropdown;
