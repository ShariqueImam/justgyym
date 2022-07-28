import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
// accepts the maximum number, speed,time of the counter from the parent component
const SingleCounter = (props) => {
	const [completed,setCompleted] = React.useState(false)
	const handleEnd = () => { 
		props.ending()
	 }
	return (
		<div className="text-gray-200 text-xl sm:text-xl md:text-2xl font-semibold mt-1" >
			<CountUp
				start={props.start}
				end={props.end}
				duration={props.duration}
				separator=" "
				decimals={0}
				decimal=""
				prefix=""
				suffix="%"
                delay={0.1}
				onEnd={handleEnd}
                onStart={() => {setCompleted(true)}}
                formattingFn= {(value) => `${value}%`}
			>
				{({ countUpRef, start,update }) => (
					<div>
						<span ref={countUpRef} />
						<VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
							{({ isVisible }) => (
								<div style={{ height: 1 }}>
									{isVisible && !completed ? start() : null}
									{/* {isVisible ? update(props.end) : null} */}
								</div>
							)}
						</VisibilitySensor>
					</div>
				)}
			</CountUp>
		</div>
	);
};

export default React.memo(SingleCounter);
