import * as React from 'react';
import { render, screen, queryByTestId } from '@testing-library/react';
import * as reactPromiseTracker from 'react-promise-tracker/lib/trackerHook';
import { SpinnerComponent } from './spinner.component';
import * as classes from './spinner.styles';

describe('common/confirmation-dialog/SpinnerComponent', () => {
  it('it renders modal when promise is not finished', () => {
    //Arrange
    const getStub = jest
      .spyOn(reactPromiseTracker, 'usePromiseTracker')
      .mockImplementation(() => ({ promiseInProgress: true }));

    //Act
    const { queryByRole } = render(<SpinnerComponent />);

    //Assert
    expect(getStub).toHaveBeenCalled();
    expect(queryByRole('presentation')).toBeInTheDocument();
  });

  it('it not renders modal when promise is finished', () => {
    //Arrange
    const getStub = jest
      .spyOn(reactPromiseTracker, 'usePromiseTracker')
      .mockImplementation(() => ({ promiseInProgress: false }));

    //Act
    const { queryByRole } = render(<SpinnerComponent />);

    //Assert
    expect(getStub).toHaveBeenCalled();
    expect(queryByRole('presentation')).toBeNull();
  });

  it('it has the correct classes when the modal is rendered', () => {
    //Arrange
    const getStub = jest
      .spyOn(reactPromiseTracker, 'usePromiseTracker')
      .mockImplementation(() => ({ promiseInProgress: true }));

    //Act
    const { queryByRole } = render(<SpinnerComponent />);
    const modal = queryByRole('presentation');

    //Assert
    expect(getStub).toHaveBeenCalled();
    expect(modal).toHaveClass(classes.modal);
    expect(queryByTestId(modal, 'loader-container')).toHaveClass(
      classes.loaderContainer
    );
  });
});
