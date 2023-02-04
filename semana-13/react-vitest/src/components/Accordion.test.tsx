import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Accordion from "./Accordion";

describe('Accordion', () => {
  test('render title', () => {
    render(
      <Accordion
        title="G11"
      >
        <p>Este es mi super test</p>
      </Accordion>
    );
    expect(screen.getByText('G11')).toBeDefined();
  });
});

// TDD