const deleteImageHandler = async (image_id) => {

  
    if (image_id) {
      const response = await fetch('/api/image/' + image_id, {
        method: 'delete',
        body: JSON.stringify({ image_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/gallery');
      } else {
        alert('Failed to delete image.');
      }
    }
  };
