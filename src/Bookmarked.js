import React from 'react'

export default function Bookmarked({list, setList}) {
  return (
    <div>
        <div style={{ margin: "0 0 0 0" }}>
              {list.map(
                (e) => {
                  return (
                    <div>
                      {e}
                    </div>
                  );
                }
              )}
            </div>       
    </div>
  )
}
