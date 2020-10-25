import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';
import { createEmptyProject } from './project.vm';

describe('./pods/project', () => {
  it('should return empty project when feeding undefined project', () => {
    // Arrange
    const project: apiModel.Project = undefined;

    const expectedResult: viewModel.Project = createEmptyProject();

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return empty project when feeding null project', () => {
    // Arrange
    const project: apiModel.Project = null;

    const expectedResult: viewModel.Project = createEmptyProject();

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return empty employee array inside project object when feeding undefined employee summary', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'name',
      externalId: '1',
      comments: 'comments',
      isActive: true,
      employees: undefined,
    };

    const expectedResult: viewModel.Project = {
      ...project,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return empty employee array inside project object when feeding null employee summary', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'name',
      externalId: '1',
      comments: 'comments',
      isActive: true,
      employees: null,
    };

    const expectedResult: viewModel.Project = {
      ...project,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return empty array when feeding empty array employee list', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'name',
      externalId: '1',
      comments: 'comments',
      isActive: true,
      employees: [],
    };

    const expectedResult: viewModel.Project = {
      ...project,
    };
    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return a project with one employee summary data when passing a project with one employee summary data', () => {
    // Arrange
    const employee: apiModel.EmployeeSummary = {
      id: '1',
      isAssigned: false,
      employeeName: 'test',
    };

    const project: apiModel.Project = {
      id: '1',
      name: 'name',
      externalId: '1',
      comments: 'comments',
      isActive: true,
      employees: [employee],
    };

    const expectedResult: viewModel.Project = {
      ...project,
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return a project with two employees summary data when passing a project with two employees summary data', () => {
    // Arrange
    const employee1: apiModel.EmployeeSummary = {
      id: '1',
      isAssigned: false,
      employeeName: 'test',
    };

    const employee2: apiModel.EmployeeSummary = {
      id: '2',
      isAssigned: true,
      employeeName: 'test2',
    };

    const project: apiModel.Project = {
      id: '1',
      name: 'name',
      externalId: '1',
      comments: 'comments',
      isActive: true,
      employees: [employee1, employee2],
    };

    const expectedResult: viewModel.Project = {
      ...project,
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
