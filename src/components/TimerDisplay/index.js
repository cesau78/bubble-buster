import zPad from "./zpad";

/**
 * 
 * @param {*} props 
 * @returns A <div /> containing "time remaining."  Defaults to "00:00".
 */
export const TimerDisplay = (props = {}) => {

    //top level container attributes
    const {id, style, className} = props;

    //functional attributes - default values to 0
    const {seconds = 0,
        minutes = 0,
        hours = 0,
        days = 0} = props;

    //zero-pad values: always seconds and minutes - only hours and days if appropropriate
    const zPadSeconds = zPad(seconds);
    const zPadMinutes = zPad(minutes);
    const zPadHours = (hours || days) && zPad(hours);
    const zPadDays = days && zPad(days);

    //add leading prefixes if appropriate
    const baseDisplay = `${zPadMinutes}:${zPadSeconds}`;
    const hourDisplay = zPadHours && `${zPadHours}:${baseDisplay}`;
    const dayDisplay = zPadDays && `${zPadDays}:${hourDisplay}`;

    //display the first defined string
    const display = dayDisplay || hourDisplay || baseDisplay;
    
    //wrap value in div element
    const div = (<div id={id} style={style} className={className}>{display}</div>);

    return div;
    
};