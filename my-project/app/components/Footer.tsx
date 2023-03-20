import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<>
			<footer className=" mt-8 footer items-center p-2 bg-base-200 text-black">
				<div className="items-center grid-flow-col">
					<div className="avatar">
						<div className="w-24 rounded ">
							<Link href="/">
								<Image src="/MSA.png" fill={true} loading = "lazy" alt="MSA Logo"/>
							</Link>
						</div>
					</div>
					<p>Copyright © 2023 - All right reserved</p>
				</div>
				<div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
					<a
						href="https://www.instagram.com/vandymsa/"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
							width="24"
							height="24"
							alt="Instagram"
							loading = "lazy"
						/>
					</a>
					<a
						href="https://web.groupme.com/join_group/33160254/cr6IWz"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="https://cdn-icons-png.flaticon.com/512/1419/1419514.png"
							width="24"
							height="24"
							alt="GroupMe"
							loading = "lazy"
						/>
					</a>
					<a
						href="https://calendar.google.com/calendar/embed?src=c_ou6igh2cf6t83h070i1u0l8d6c%40group.calendar.google.com&ctz=America%2FChicago"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1024px-Google_Calendar_icon_%282020%29.svg.png"
							width="24"
							height="24"
							alt="Google Calendar"
							loading = "lazy"
						/>
					</a>
				</div>
			</footer>
		</>
	);
}
