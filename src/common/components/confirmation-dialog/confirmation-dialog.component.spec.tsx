import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('common/confirmation-dialog/ConfirmationDialogComponent', () => {
  it('should be rendered as expected passing required properties', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title',
      labels: {
        closeButton: 'close',
        acceptButton: 'accept',
      },
    };

    // Act
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.labels.acceptButton)).toBeInTheDocument();
    expect(getByText(props.labels.closeButton)).toBeInTheDocument();
  });

  it('should call onAccept function when accept button is clicked', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title',
      labels: {
        closeButton: 'close',
        acceptButton: 'accept',
      },
    };

    // Act
    const { getByRole } = render(<ConfirmationDialogComponent {...props} />);

    const acceptButtonElement = getByRole('button', {
      name: props.labels.acceptButton,
    });
    userEvent.click(acceptButtonElement);

    // Assert
    expect(props.onAccept).toHaveBeenCalled();
  });

  it('should call onClose function when close button is clicked', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title',
      labels: {
        closeButton: 'close',
        acceptButton: 'accept',
      },
    };

    // Act
    const { getByRole } = render(<ConfirmationDialogComponent {...props} />);

    const closeButtonElement = getByRole('button', {
      name: props.labels.closeButton,
    });
    userEvent.click(closeButtonElement);

    // Assert
    expect(props.onClose).toHaveBeenCalled();
  });
});
