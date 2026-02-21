export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#!" className="text-3xl font-bold font-Ovo mx-auto mb-2 inline-block">Hariprasath</a>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:hariprasathns804@gmail.com">hariprasathns804@gmail.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} Hariprasath. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a href="#!">GitHub</a></li>
                    <li><a href="#!">LinkedIn</a></li>
                    <li><a href="#!">Twitter</a></li>
                </ul>
            </div>
        </div>
    )
}