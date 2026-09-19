import fs from 'fs';
import path from 'path';
import { render, screen } from '@testing-library/react';
import App from './App';
import { RESUME_FILENAME } from './utilis/resume';

test('resume buttons link to the resume PDF that ships in /public', () => {
  render(<App />);

  const downloadCv = screen.getByRole('link', { name: /download cv/i });
  const downloadResume = screen.getByRole('link', { name: /download resume/i });
  const viewResume = screen.getByRole('link', { name: /view resume/i });

  [downloadCv, downloadResume, viewResume].forEach((link) => {
    expect(link).toHaveAttribute('href', expect.stringMatching(new RegExp(`${RESUME_FILENAME}$`)));
  });
  expect(downloadCv).toHaveAttribute('download', RESUME_FILENAME);
  expect(downloadResume).toHaveAttribute('download', RESUME_FILENAME);
  expect(viewResume).toHaveAttribute('target', '_blank');

  expect(fs.existsSync(path.join(__dirname, '..', 'public', RESUME_FILENAME))).toBe(true);
});

test('renders the portfolio without crashing', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/narendra/i);
  expect(nameElements.length).toBeGreaterThan(0);
});

test('shows the current software role and its project', () => {
  render(<App />);
  expect(screen.getByText('Associate Software Engineer')).toBeInTheDocument();
  expect(screen.getByText('Pirnav Software Solutions Pvt. Ltd.')).toBeInTheDocument();
  expect(screen.getByText('KiniEduHub / Pirnav Edutech')).toBeInTheDocument();
});

test('positions the portfolio as a MERN Stack Developer', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/MERN Stack Developer/i);
});
