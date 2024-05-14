export default function Create() {
  return (
    <div className="flex justify-center">
      <div className="max-w-primary m-4 w-full sm:m-6">
        <form action="" className="flex flex-col items-baseline  gap-3">
          <div className="flex w-full flex-col">
            <label htmlFor="title">Judul Donasi</label>
            <input
              className="border border-ashes-100 bg-slate-100"
              type="text"
              name="title"
              id="title"
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="description">Deskripsi Donasi</label>
            <textarea
              className="border border-ashes-100 bg-slate-100"
              name="description"
              id="description"
            ></textarea>
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="target">Target Donasi</label>
            <input
              className="border border-ashes-100 bg-slate-100"
              type="number"
              name="target"
              id="target"
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="deadline">Tenggat Donasi</label>
            <input
              className="border border-ashes-100 bg-slate-100"
              type="date"
              name="deadline"
              id="deadline"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-primary px-8 py-4 font-bold text-white"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}
