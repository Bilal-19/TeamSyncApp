const Header = ({ selectedTeam, teamMemberCount }) => {
    return (
        <>
            <header className="container">
                <div className="row justify-content-center mt-3 mb-3">
                    <div className="col-6">
                        <h1 className="text-center">Team Member Allocation</h1>
                        <h3 className="text-center">{selectedTeam} has {teamMemberCount} {teamMemberCount === 1 ? 'Member' : 'Members'}</h3>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header