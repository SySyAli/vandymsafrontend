import React from "react";

async function fetchPhotos() {
	const url = "https://vandymsabackend.fly.dev";
	const res = await fetch(url + `/getPhotoLinks`, { cache: "no-store" });
	const data = res.json();
	return data;
}

export async function getServerSideProps() {
	const url = "https://vandymsabackend.fly.dev/getPhotoLinks";
	const res = await fetch(url, { cache: "no-store" });
	const data = await res.json();
	return {
		props: { photos: data}, // will be passed to the page component as props
	};
}


export default function PhotosPage({photos}: any) {
	//const photos = await fetchPhotos();
	return (
		<div>
			<div className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">
				Photos
			</div>
			<div className="flex flex-wrap flex-col items-stretch text-center justify-center lg:flex-row lg:flew-wrap gap-100 ">
				{photos.results.map((photo: any, i: any) => {
					return (
						<div className="h-full w-fit p-4" key={i}>
							<img src={photo} loading="lazy" />
						</div>
					);
				})}
			</div>
		</div>
	);
}
