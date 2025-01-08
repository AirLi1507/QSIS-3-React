type Props = {
    loginState: boolean
}

const Dashboard = ({loginState}: Props) => {
    if (!loginState) {window.location.replace('/login')}

    return (
        <div>
            <h1>Hello, world!</h1>
        </div>
    )
}

export { Dashboard }