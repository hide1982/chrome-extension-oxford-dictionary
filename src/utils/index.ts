export const ensure = <T>(
  argument: T | undefined | null,
  message = "This value was promised to be there."
): T => {
  if (argument === undefined || argument === null) {
    throw new TypeError(message)
  }

  return argument
}

export const sendMessage = <T>(
  message: string | { [key: string]: string }
): Promise<T> => {
  return new Promise((resolve, reject) => {
    try {
      chrome.runtime.sendMessage(message, resolve)
    } catch (err) {
      reject(err)
    }
  })
}

export const getSelection = (): Selection | void => {
  const ignoreNodeTypes = ["LABEL", "FORM", "INPUT"]
  const selection = document.getSelection()
  const nodeTypes = [selection?.focusNode?.nodeName ?? ""]
  selection?.focusNode?.childNodes.forEach((val) => {
    nodeTypes.push(val.nodeName)
  })
  const isValidNodeType = nodeTypes.every(
    (type) => ignoreNodeTypes.indexOf(type) === -1
  )

  if (selection && isValidNodeType) {
    return selection
  }
}

interface DisplayPosition {
  top: number
  left: number
}
export const getDisplayPosition = (
  targetRect: DOMRect,
  offsetTop = 30
): DisplayPosition => {
  const relative = document.body.getBoundingClientRect()
  const top = Math.floor(targetRect.top) - Math.floor(relative.top) - offsetTop
  const left = Math.floor(targetRect.left) - Math.floor(relative.left)

  return { top, left }
}
