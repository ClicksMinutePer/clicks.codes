import Header from '../Components/Header'

export default function Error() {
	return (
		<>
			<Header
				name="0118 999 881 999 119 7253"
				subtext={<>
					Dear Sir/Madam,<br />
					Fire! Fire! Help me!<br />
					123 Carenden Road.<br />
					Looking forward to hearing from you,<br />
					All the best, Maurice Moss
				</>}
				embedDescription="This is the internet"
				gradient={["F27878", "D96B6B"]}
				wave="web/waves/header/rsm"
				buttons={[{color: "F27878", buttonText: "ffffff", text: "No that's too formal", link: "/#"}]}
				fullscreen={true}
			/>
		</>
	)
}
