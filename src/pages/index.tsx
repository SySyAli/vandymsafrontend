import NewCarousel from "../components/newCarousel";
import hdate from "human-date";
import Image from "next/image";
// 'tw-elements'
const URI = "https://vandymsabackend.fly.dev";

export async function getServerSideProps() {
	const url = await `${URI}/prayerTimes`;
	const res = await fetch(url, { cache: "no-store" });
	const data = await res.json();
	const url1 = await `${URI}/getPhotoLinks`;
	const res1 = await fetch(url1, { cache: "no-store" });
	const data1 = await res1.json();
	return {
		props: { times: data, photoUrls: data1 }, // will be passed to the page component as props
	};
}

async function getPrayerTimes() {
	const url = await `${URI}/prayerTimes`;
	const res = await fetch(url, { cache: "no-store" });
	const data = await res.json();
	return data;
}
async function getPhotoUrls() {
	const url = await `${URI}/getPhotoLinks`;
	const res = await fetch(url, { cache: "no-store" });
	const data = await res.json();
	return data;
}

/* async function getEvents() {
	const url = await "http://localhost:4000/getMSAEvents";
	const res = await fetch(url, { cache: "no-store" });
	const data = await res.json();
	return data;
}
 */
// FIGURE OUT WHAT TO DO WITH CAROUSEL - AUTOMATIC OR BUTTONS/MANUAL
// FIGURE OUT TIME CONVERSION
export default function Home({ times, photoUrls }: any) {
  // console.log(times + " " + photoUrls)
	photoUrls = photoUrls.results.slice(0, 10);

	/*
    <div className="alert shadow-lg w-full items-center justify-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{times.iqammahTimes.jummahUpdate === 'undefined' ? <>Loading...</> : <>{times.iqammahTimes.jummahUpdate}</>}</span>
        </div>
      </div>
  */
	//
	/*
  {params.links.map((link: any, i: any) =>{
                        <div>
                            <img src={link} alt={"image"+i+1}/>
                        </div>
                })}
  */
	// <MyGallery links={photoUrls}/>
	return (
		<div>
			<div className="flex flex-col gap-4 w-full align-center items-center justify-center">
				<div
					className="hero h-[50vh]"
					style={{
						backgroundImage: `url('https://www.commonapp.org/static/f14242e1e38d8f02ce26ed9f5e57c371/vanderbilt-university_277.jpg')`,
					}}
				>
					<div className="hero-overlay bg-opacity-60"></div>
					<div className="hero-content text-center text-neutral-content">
						<div className="max-w-md">
							<h1 className="mb-5 text-5xl text-white font-bold">
								Welcome to the Vanderbilt MSA!
							</h1>
						</div>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row h-full w-full gap-6">
					<div className="flex flex-col gap-6 w-full items-center justify-center lg:h-fit lg:w-[50%] px-2 lg:rounded-lg">
						<PrayerTable iTimes={times} />
					</div>
					<div className="flex flex-col lg:w-[50%] lg:h-full px-2 gap-6 w-full h-fit items-center justify-center pb-6">
						<div className="object-contain w-full h-fit">
							<iframe
								src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=Y19vdTZpZ2gyY2Y2dDgzaDA3MGkxdTBsOGQ2Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457"
								className="w-full h-[50vw] lg:h-[20vw]"
							></iframe>
						</div>
					</div>
				</div>

				<div className="hidden lg:flex lg:align-center rounded-lg lg:items-center lg:justify-center lg:h-fit w-full px-2 mb-6 ">
					<NewCarousel links={photoUrls} />
				</div>
			</div>
		</div>
	);
}
//

/*
{threeEvents.map((event: any, i: any) => {
							return (
								<div key={i}>
									<Event className="h-full" event={event} />
								</div>
							);
						})}

*/

// FIGURE OUT TIMEZONES
// current Prayer
function PrayerTable({ iTimes }: any) {
	return (
		<div className="flex flex-col align-center justify-center gap-4">
			<h1 className="font-bold text-3xl text-center">Prayer Times</h1>

			<table className="drop-shadow-lg table table-compact text-center border-seperate overflow-auto lg:w-full p-4">
				<thead>
					<tr>
						<th></th>
						<th>Prayer Time:</th>
						<th>Iqamah Time:</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Fajr:</td>
						<td className={iTimes.currentPrayer === "fajr" ? "font-bold" : ""}>
							{iTimes.prayerTimes.fajr === "undefined"
								? "Loading"
								: iTimes.prayerTimes.fajr}
						</td>
						<td className={iTimes.currentPrayer === "fajr" ? "font-bold" : ""}>
							{iTimes.iqammahTimes.fajrIqamah === "undefined"
								? "Loading"
								: iTimes.iqammahTimes.fajrIqamah}
						</td>
					</tr>
					<tr>
						<td>Sunrise:</td>
						<td
							className={
								iTimes.currentPrayer === "NoPrayerTime" ? "font-bold" : ""
							}
						>
							{iTimes.prayerTimes.sunrise === "undefined"
								? "Loading"
								: iTimes.prayerTimes.sunrise}
						</td>
						<td
							className={
								iTimes.currentPrayer === "NoPrayerTime" ? "font-bold" : ""
							}
						>
							{iTimes.iqammahTimes.sunriseIqamah === "undefined"
								? "Loading"
								: iTimes.iqammahTimes.sunriseIqamah}
						</td>
					</tr>
					<tr>
						<td>Zuhr:</td>
						<td className={iTimes.currentPrayer === "zuhur" ? "font-bold" : ""}>
							{iTimes.prayerTimes.zuhr === "undefined"
								? "Loading"
								: iTimes.prayerTimes.zuhr}
						</td>
						<td className={iTimes.currentPrayer === "zuhur" ? "font-bold" : ""}>
							{iTimes.iqammahTimes.zuhrIqamah === "undefined"
								? "Loading"
								: iTimes.iqammahTimes.zuhrIqamah}
						</td>
					</tr>
					<tr>
						<td>Asr:</td>
						<td className={iTimes.currentPrayer === "asr" ? "font-bold" : ""}>
							{iTimes.prayerTimes.asr === "undefined"
								? "Loading"
								: iTimes.prayerTimes.asr}
						</td>
						<td className={iTimes.currentPrayer === "asr" ? "font-bold" : ""}>
							{iTimes.iqammahTimes.asrIqamah === "undefined"
								? "Loading"
								: iTimes.iqammahTimes.asrIqamah}
						</td>
					</tr>
					<tr>
						<td>Maghrib:</td>
						<td
							className={iTimes.currentPrayer === "magrhib" ? "font-bold" : ""}
						>
							{iTimes.prayerTimes.maghrib === "undefined"
								? "Loading"
								: iTimes.prayerTimes.maghrib}
						</td>
						<td
							className={iTimes.currentPrayer === "magrhib" ? "font-bold" : ""}
						>
							{iTimes.maghribIqamah === "undefined" ? (
								"Loading"
							) : (
								<>{iTimes.maghribiqammah}</>
							)}
						</td>
					</tr>
					<tr>
						<td>Isha: </td>
						<td className={iTimes.currentPrayer === "isha" ? "font-bold" : ""}>
							{iTimes.prayerTimes.isha === "undefined"
								? "Loading"
								: iTimes.prayerTimes.isha}
						</td>
						<td className={iTimes.currentPrayer === "isha" ? "font-bold" : ""}>
							{iTimes.iqammahTimes.ishaIqamah === "undefined"
								? "Loading"
								: iTimes.iqammahTimes.ishaIqamah}
						</td>
					</tr>
					<tr>
						<td>First Jummah:</td>
						<td>
							{iTimes.iqammahTimes.firstJummahTime === "undefined"
								? "Loading"
								: iTimes.iqammahTimes.firstJummahTime}
						</td>
						<td>N/A</td>
					</tr>
					<tr>
						<td>Second Jummah:</td>
						<td>
							{iTimes.iqammahTimes.secondJummahTime === "undefined"
								? "Loading"
								: iTimes.iqammahTimes.secondJummahTime}
						</td>
						<td>N/A</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

function Event({ event }: any) {
	return (
		<div className="card card-bordered glass bg-base-200 shadow-xl lg:h-full w-fit items-center justify-center">
			<div className="card-body h-full">
				{event.summary !== undefined ? (
					<h2 className="card-title">{event.summary}</h2>
				) : (
					<h2 className="card-title">(No Name)</h2>
				)}

				{event.location !== undefined ? (
					<h4>{event.location}</h4>
				) : (
					<h4>Undefined/Online</h4>
				)}

				{event.start.timeZone !== undefined ? (
					<h6>Timezone: {event.start.timeZone}</h6>
				) : (
					<h6>(No Timezone)</h6>
				)}

				{event.start.dateTime !== undefined ? (
					<p>
						Start Time:{" "}
						{hdate.prettyPrint(new Date(event.start.dateTime), {
							showTime: true,
						})}
					</p>
				) : (
					<p></p>
				)}

				{event.end.dateTime !== undefined ? (
					<p>
						End Time:{" "}
						{hdate.prettyPrint(new Date(event.end.dateTime), {
							showTime: true,
						})}
					</p>
				) : (
					<p></p>
				)}

				{event.start.date !== undefined ? (
					<p>Start Date: {hdate.prettyPrint(new Date(event.start.date))}</p>
				) : (
					<p></p>
				)}

				{event.end.date !== undefined ? (
					<p>End Date: {hdate.prettyPrint(new Date(event.end.date))}</p>
				) : (
					<p></p>
				)}

				{event.description !== undefined ? (
					<p>{event.description}</p>
				) : (
					<p>Undefined</p>
				)}
			</div>
		</div>
	);
}
