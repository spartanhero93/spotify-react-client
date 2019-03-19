import HtmlToReactParser from 'html-to-react'
import ReactDOMServer from 'react-dom/server'

export const RenderHTML = async html => {
  try {
    const htmlInput = await html
    const htmlToReactParser = new HtmlToReactParser()
    const reactElement = htmlToReactParser.parse(htmlInput)
    const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement)

    return reactHtml
  } catch (error) {
    console.error(error)
  }
}
