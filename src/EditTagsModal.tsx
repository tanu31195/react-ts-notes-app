import { Button, Col, Form, Modal, Row, Stack } from "react-bootstrap";
import { Tag } from "./App";

type EditTagsModalProps = {
  availableTags: Tag[];
  handleClose: () => void;
  show: boolean;
  onDelete: (id: string) => void;
  onUpdate: (id: string, label: string) => void;
};

export function EditTagsModal({
  availableTags,
  handleClose,
  show,
  onDelete,
  onUpdate,
}: EditTagsModalProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map((tag) => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control
                    type='text'
                    value={tag.label}
                    onChange={(e) => onUpdate(tag.id, e.target.value)}
                  />
                </Col>
                <Col xs='auto'>
                  <Button
                    variant='outline-danger'
                    onClick={() => onDelete(tag.id)}
                  >
                    &times;
                  </Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
