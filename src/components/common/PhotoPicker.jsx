import React from "react";

function PhotoPicker({ handelSubmitUpload, Handlechange, refFile,form }) {
  return (
    <div>
      <form
        className="hidden"
        enctype="multipart/form-data"
        onSubmit={handelSubmitUpload}
      >
        <input className="" onChange={Handlechange} ref={refFile} type="file" />
        <button ref={form} type="submit"></button>
      </form>
    </div>
  );
}

export default PhotoPicker;
