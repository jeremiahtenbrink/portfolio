import { useEffect, useRef, useState } from "react";
import { callForEveryNode } from "@jeremiah_tenbrink/for-every-node";

export const useDashArray = () => {
  
  /**
   *
   * @type {React.MutableRefObject<SVGElement>}
   */
  const ref = useRef();
  const [ outline, setOutlinePath ] = useState( null );
  
  useEffect( () => {
    
    if( ref.current ){
      debugger;
      ref.current.addEventListener( "mouseenter", onHover );
      if( !outline ){
        debugger;
        callForEveryNode( ref.current, ( element ) => {
          debugger;
          
        } );
      }
    }
  }, [ ref ] );
  
  const onHover = () => {
    debugger;
  };
  
  return ref;
};
