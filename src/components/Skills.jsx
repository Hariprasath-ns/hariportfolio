export default function Skills() {
    const skills = [
        { name: 'C', percentage: 80 },
        { name: 'Python', percentage: 50 },
        { name: 'DSA', percentage: 50 },
        { name: 'JavaScript', percentage: 70 },
        { name: 'React', percentage: 75 },
        { name: 'UI', percentage: 70 },
    ];

    return (
        <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Technical Proficiency</h4>
            <h2 className="text-center text-5xl font-Ovo">My skill set</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">A comprehensive overview of my technical skills and expertise levels.</p>

            <div className="max-w-3xl mx-auto">
                {skills.map((skill) => (
                    <div key={skill.name} className="mb-6">
                        <div className="flex justify-between mb-2">
                            <span className="font-Ovo text-gray-700 dark:text-white font-semibold">{skill.name}</span>
                            <span className="font-Ovo text-gray-600 dark:text-white/80">{skill.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${skill.percentage}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
