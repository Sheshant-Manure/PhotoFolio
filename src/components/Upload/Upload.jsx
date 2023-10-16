import style from './Upload.module.css'

const Upload = () => {
  return (
    <>
    <div className={style.container}>
        <div className={style.albumform}>
          <input type='text' placeholder='Album Name' />
          <button type='submit'><h3>Create Album</h3></button>
        </div>
        <div className={style.uploadbox}>
            <label>
              <input type='file' placeholder='New album name' />
              <h2>Select File</h2>
            </label>
            <p>(Format: .jpeg/jpg, png, svg format files only)</p>
            <button type='submit'><h3>Add To Album</h3></button>
        </div>
        {/* <button type='submit'><h3>Add To Album</h3></button> */}
    </div>
    </>
  )
}

export default Upload