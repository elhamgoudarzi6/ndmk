"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import { Plus, Edit, Trash2 } from "lucide-react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image"; // برای بهینه‌سازی تصاویر

interface ImageItem {
  id: number;
  title: string;
  preview: string;
}

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setImages([
      { id: 1, title: "Sample Image", preview: "/assets/images/1.jpg" },
      { id: 2, title: "Two Image", preview: "/assets/images/2.jpg" },
    ]);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleAddOrUpdateImage = () => {
    if (!title) return;

    const newImage: ImageItem = {
      id: editId ?? Date.now(),
      title,
      preview,
    };

    if (editId) {
      setImages(images.map((img) => (img.id === editId ? newImage : img)));
    } else {
      setImages([...images, newImage]);
    }

    // Reset form
    setTitle("");
    setPreview("");
    setEditId(null);
    setOpen(false);
  };

  const handleEditImage = (id: number) => {
    const selected = images.find((img) => img.id === id);
    if (selected) {
      setTitle(selected.title);
      setPreview(selected.preview);
      setEditId(id);
      setOpen(true);
    }
  };

  const handleDeleteImage = (id: number) => {
    setImages(images.filter((img) => img.id !== id));
  };

  const filteredImages = images.filter((img) =>
    img.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns: GridColDef[] = [
    {
      field: "preview",
      headerName: "Preview",
      flex: 1,
      renderCell: (params) => (
        <Image
          src={params.value}
          alt="Preview"
          width={50}
          height={50}
          style={{ borderRadius: 30, objectFit: "cover" }}
        />
      ),
    },
    { field: "title", headerName: "Title", flex: 2 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Box display="flex" gap={1}>
          <Button
            onClick={() => handleEditImage(params.row.id)}
            size="small"
            color="primary"
          >
            <Edit size={16} />
          </Button>
          <Button
            onClick={() => handleDeleteImage(params.row.id)}
            size="small"
            color="error"
          >
            <Trash2 size={16} />
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ p: isMobile ? 2 : 4 }}>
      {/* Header */}
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems={isMobile ? "stretch" : "center"}
        gap={2}
        mb={2}
      >
        <Typography variant="h6" fontWeight="bold">
          Gallery
        </Typography>
        <TextField
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          sx={{ flex: 1 }}
        />
        <Button
          variant="contained"
          startIcon={<Plus size={20} />}
          onClick={() => {
            setTitle("");
            setPreview("");
            setEditId(null);
            setOpen(true);
          }}
          fullWidth={isMobile}
        >
          Add
        </Button>
      </Box>

      {/* Content */}
      {isMobile ? (
        <Box display="grid" gridTemplateColumns="1fr" gap={2}>
          {filteredImages.map((img) => (
            <Card key={img.id}>
              <CardMedia
                component="img"
                height="180"
                image={img.preview}
                alt={img.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="subtitle1">{img.title}</Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={() => handleEditImage(img.id)} color="primary">
                  <Edit size={18} />
                </IconButton>
                <IconButton onClick={() => handleDeleteImage(img.id)} color="error">
                  <Trash2 size={18} />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 1,
            overflowX: "auto",
          }}
        >
          <DataGrid
            rows={filteredImages}
            columns={columns}
            autoHeight
            disableRowSelectionOnClick
            pageSizeOptions={[5, 10]}
          />
        </Box>
      )}

      {/* Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>{editId ? "Edit Image" : "Add New Image"}</DialogTitle>
        <DialogContent dividers>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
            />
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {preview && (
              <Box>
                <Image
                  src={preview}
                  alt="Preview"
                  width={800}
                  height={200}
                  className="rounded-md object-cover w-full h-[200px]"
                />
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddOrUpdateImage} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default GalleryPage;
