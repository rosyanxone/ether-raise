export default function CardDonation() {
  return (
    <section className="flex justify-center items-center">
      <div className="max-w-primary gap-6 p-4 sm:grid grid-cols-3 flex-col flex sm:p-6">
        <div className="rounded-2xl border border-light-300 bg-light-200 sm:max-w-[360px]">
          <div className="relative overflow-hidden rounded-2xl">
            <span className="absolute m-4 rounded-lg border border-light-300 bg-black bg-opacity-20 px-4 py-2 text-light-300">
              Headphones
            </span>
            <img
              className="h-40 w-full object-cover"
              src="./img/headphone-full.png"
              alt="Headphone"
            />
          </div>
          <div className="flex flex-col gap-8 px-4 py-6">
            <div className="flex flex-col gap-5">
              <h5 className="text-h5-semi text-ashes-100 line-clamp-1">
                Support the Launch of Our Cutton Headphone
              </h5>
              <p className="text-body-regular text-ashes-200">
                Check out our recent campaign. Let’s start your investment
                journey from...
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <span className="text-body-semi flex items-baseline gap-1 text-ashes-100">
                  6000
                  <p className="text-caption-regular">(Terkumpul)</p>
                </span>
                <span className="text-body-semi text-ashes-100">10000</span>
              </div>
              <div className="flex justify-between gap-3 align-baseline">
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-[#956CF6]"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <span className="text-caption-medium text-dark">70%</span>
              </div>
            </div>
            <div className="pt-2 text-center">
              <a href="#" className="text-button lexend-deca text-primary">
                Donasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
