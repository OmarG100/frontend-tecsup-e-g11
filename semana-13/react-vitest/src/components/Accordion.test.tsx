import { render, screen } from "@testing-library/react";
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
});