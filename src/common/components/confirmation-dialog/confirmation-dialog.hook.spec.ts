import { renderHook } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup } from 'common/models';
import { act } from 'react-test-renderer';

describe('common/confirmation-dialog/useConfirmationDialog', () => {
  it('should return an object with correct data', () => {
    //Act

    const { result } = renderHook(() => useConfirmationDialog());

    //Assert

    expect(result.current.isOpen).toEqual(false);
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should update isOpen when it calls onOpenDialog', () => {
    //Act

    const { result } = renderHook(() => useConfirmationDialog());
    const itemToDelete = createEmptyLookup();

    act(() => {
      result.current.onOpenDialog(itemToDelete);
    });

    //Assert

    expect(result.current.isOpen).toEqual(true);
  });

  it('should update itemToDelete when it calls onOpenDialog', () => {
    //Act

    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(createEmptyLookup());
    });

    //Assert

    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });

  it('should update isOpen when it calls onClose', () => {
    //Act

    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onClose();
    });

    //Assert

    expect(result.current.isOpen).toEqual(false);
  });

  it('should update itemToDelete when it calls onAccept', () => {
    //Act

    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onAccept();
    });

    //Assert

    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });
});
