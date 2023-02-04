import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from "./Accordion";

describe('Accordion', () => {
  beforeEach(() => {
    render(
      <Accordion
        title="G11"
      >
        <p>Este es mi super test</p>
      </Accordion>
    );
  });

  test('render title', () => {
    expect(screen.getByText('G11')).toBeDefined();
  });

  test('content not display', () => {
    expect(screen.queryByText(/test/i)).toBeNull();
  });

  test('show the content when the title is clicked', () => {
    const button = screen.getByText(/Open/i);
    fireEvent.click(button);
    expect(screen.queryByText(/test/i)).toBeDefined();
  });

  test('hide the content when the title is clicked twice', () => {
    const button = screen.getByText(/Open/i);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText(/test/i)).toBeNull();
  });
});