import React from 'react'

import GitHubCalendar from 'react-github-calendar'

export default function Static() {
    return (
        <div className='statesAndCalender' >
            <h2>Github Stats</h2>
            <div className='Mystatic' >
                <img src="https://github-readme-stats.vercel.app/api?username=prakashkumarjena700&show_icons=true&theme=algolia&count_private=true" alt="" />
                <img src="https://streak-stats.demolab.com/?user=prakashkumarjena700&theme=buefy" alt="" />
            </div>
            <h2 style={{ marginTop: '50px' }} >Github Calander</h2>
            <div className='githubCalander' >
                <GitHubCalendar username='prakashkumarjena700' />
            </div>
        </div>
    )
}
