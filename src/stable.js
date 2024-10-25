async function apiFetch(url, formData) {
  const fetchOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_STABLE_API_KEY}`,
      Accept: 'application/json',
    },
    body: formData,
  }

  const response = await fetch(url, fetchOptions)
  const json = await response.json()
  return json
}

export async function textToImage(prompt) {
  try {
    const formData = new FormData()
    formData.append('prompt', prompt)
    formData.append('style_preset', '3d-model')

    const json = apiFetch(
      'https://api.stability.ai/v2beta/stable-image/generate/sd3',
      formData,
    )

    return 'data:image/png;base64,' + json.image
  } catch (error) {
    console.error(error)
  }
}

export function saveBase64AsImageFile(base64String, fileName) {
  // Remove the prefix from the base64 string (data:image/png;base64,)
  const base64Image = base64String.split(';base64,').pop()

  // Convert base64 string to a byte array
  const byteCharacters = atob(base64Image)
  const byteNumbers = new Array(byteCharacters.length)
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i)
  }
  const byteArray = new Uint8Array(byteNumbers)

  // Create a Blob from the byte array
  const blob = new Blob([byteArray], { type: 'image/png' })

  // Create a temporary URL for the Blob
  const blobURL = URL.createObjectURL(blob)

  // Create an anchor element to trigger the download
  const link = document.createElement('a')
  link.href = blobURL
  link.download = fileName

  // Append the link to the document body, trigger click, and remove it
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Revoke the Blob URL
  URL.revokeObjectURL(blobURL)
}
