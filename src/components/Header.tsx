import Link from "next/link";
import Image from "next/image";
///../../public/msaLogo.jpeg

export default function Navbar() {
	return (
		<>
			<div className="navbar ">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<Link href="/"> Home </Link>
							</li>

							<li>
								<Link href="/aboutUs">About Us</Link>
							</li>
							<li>
								<Link href="/ramadan">Ramadan 2023</Link>
							</li>
							<li>
								<Link href="/photos"> Photos </Link>
							</li>
							<li>
								<Link href="/recentEvents"> Recent Events </Link>
							</li>

							<li>
								<Link href="/forms"> Getting Invovled </Link>
							</li>
							<li className="z-[999]" tabIndex={0}>
								<a>
									Dining Options
									<svg
										className="fill-current"
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
									>
										<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
									</svg>
								</a>
								<ul className="rounded-box p-2 bg-base-100">
									<li>
										<Link href="/halalDiningFood"> Vandy Dining Halls</Link>
									</li>
									<li>
										<Link href="/halalRestaurants"> Halal Restaurants </Link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="avatar">
						<div className="w-24 rounded">
							<Link href="/">
								<img
									src="/MSALogo.png"
									loading="lazy"
									alt="MSA Logo"
								/>
							</Link>
						</div>
					</div>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link href="/"> Home </Link>
						</li>
						<li>
							<Link href="/aboutUs">About Us</Link>
						</li>

						<li>
							<Link href="/ramadan">Ramadan 2023</Link>
						</li>

						<li>
							<Link href="/photos"> Photos </Link>
						</li>
						<li>
							<Link href="/recentEvents"> Recent Events </Link>
						</li>

						<li>
							<Link href="/forms"> Getting Involved </Link>
						</li>
						<li className="z-[999]">
							<a>
								Dining Options
								<svg
									className="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
								>
									<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
								</svg>
							</a>
							<ul className="p-2 bg-base-100">
								<li>
									<Link href="/halalDiningFood"> Vandy Dining Food</Link>
								</li>
								<li>
									<Link href="/halalRestaurants"> Halal Restaurants </Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
