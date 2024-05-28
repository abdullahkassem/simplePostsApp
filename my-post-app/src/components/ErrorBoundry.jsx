
import React from "react"

//This was copied from nextjs official Docs

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props)
   
      this.state = { hasError: false }
    }
    static getDerivedStateFromError(error) {
   
      return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
      console.log({ error, errorInfo })
    }
    render() {
      if (this.state.hasError) {
        return (
          <div>
            <h2 className="fullScreenText">Oops, there is an error!</h2>
            <button className="TryAgainButton"
              type="button"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again?
            </button>
            
          </div>
        )
      }
   
      // Return children components in case of no error
   
      return this.props.children
    }
  }
   
  export default ErrorBoundary