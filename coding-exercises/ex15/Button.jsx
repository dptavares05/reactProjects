export default function Button({children, mode = 'filled', className, Icon, ...props}) {
 // Todo: Build this component!
 
 // !!! Important: 
 // Wrap the icon with a <span className="button-icon"> to achieve the target look
 // Also wrap the children prop with a <span>
 
 let cssClass = `button ${mode}-button`;

 if(className){cssClass += ' ' +className;}

 if(Icon){cssClass += ' ' + "icon-button"}
 
 return(
    <button className={cssClass} {...props}>
        {Icon &&(
            <span className="button-icon">
            <Icon />
            </span>
        )}
    <span>{children}</span>
    </button>
    );
}
