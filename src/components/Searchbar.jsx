function Searchbar() {
  return (
    <div>
      <div class='form-control w-full max-w-xs pb-10'>
        <input
          type='text'
          placeholder='Search slabs here ...'
          class='input input-bordered w-full max-w-xs'
        />
        <label class='label'>
          <span class='label-text-alt'>
            Type in the name of the material color here
          </span>
        </label>
      </div>
    </div>
  )
}

export default Searchbar
